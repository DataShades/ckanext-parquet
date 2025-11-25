import { ReactNode, useEffect, useState, useCallback } from "react";
import Page, { PageProps } from "./Page.js";
import Layout from "./Layout.js";

import { sortableDataFrame } from "hightable";
import { byteLengthFromUrl, parquetMetadataAsync } from "hyparquet";
import { AsyncBufferFrom, asyncBufferFrom, parquetDataFrame } from "hyperparam";

import Spinner from './assets/spinner.tsx';

export default function App({ fileUrl }: { fileUrl: string }): ReactNode {
  const [error, setError] = useState<Error>();
  const [pageProps, setPageProps] = useState<PageProps>();

  const setUnknownError = useCallback((e: unknown) => {
    setError(e instanceof Error ? e : new Error(String(e)));
  }, []);

  // Load parquet file into PageProps
  const loadParquetFile = useCallback(
    async (url: string) => {
      try {
        const byteLength = await byteLengthFromUrl(url);
        const from: AsyncBufferFrom = { url, byteLength };

        const asyncBuffer = await asyncBufferFrom(from);
        const metadata = await parquetMetadataAsync(asyncBuffer);
        const df = sortableDataFrame(parquetDataFrame(from, metadata));

        setPageProps({
          metadata,
          df,
          name: url,
          byteLength,
          setError: setUnknownError,
        });
      } catch (err) {
        setUnknownError(err);
      }
    },
    [setUnknownError]
  );

  // Load once on mount
  useEffect(() => {
    loadParquetFile(fileUrl);
  }, [fileUrl, loadParquetFile]);

  return (
    <Layout error={error}>
      {pageProps ? <Page {...pageProps} /> : <div className="loader"><Spinner /> Loading...</div>}
    </Layout>
  );
}

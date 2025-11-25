from typing import Any

import ckan.plugins as p
import ckan.plugins.toolkit as tk
from ckan import types

from ckanext.parquet.logic import schema


class ParquetPlugin(p.SingletonPlugin):
    p.implements(p.IConfigurer)
    p.implements(p.IResourceView)

    # IConfigurer

    def update_config(self, config_):
        tk.add_template_directory(config_, "templates")
        tk.add_public_directory(config_, "public")
        tk.add_resource("assets", "parquet")

    # IResourceView

    def info(self):
        return {
            "name": "parquet_view",
            "title": "Parquet File View",
            "icon": "table",
            "schema": schema.get_preview_schema(),
            "iframed": False,
            "default_title": "Parquet File View",
            "default_description": "View Parquet files in a tabular format.",
        }

    def can_view(self, data_dict: types.DataDict) -> bool:
        resource = data_dict.get("resource")

        if not resource:
            return False

        return resource.get("format", "").lower() == "parquet"

    def setup_template_variables(
        self, context: types.Context, data_dict: types.DataDict
    ) -> dict[str, Any]:
        return data_dict

    def view_template(self, context: types.Context, data_dict: dict[str, Any]) -> str:
        return "parquet/parquet_view.html"

    def form_template(self, context: types.Context, data_dict: dict[str, Any]) -> str:
        return "parquet/parquet_form.html"

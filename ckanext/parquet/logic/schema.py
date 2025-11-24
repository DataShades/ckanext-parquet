from __future__ import annotations

from ckan import types
from ckan.logic.schema import validator_args


@validator_args
def get_preview_schema(  # noqa: PLR0913
    unicode_safe: types.Validator,
    url_validator: types.ValidatorFactory,
    ignore_empty: types.ValidatorFactory,
) -> types.Schema:
    return {
        "file_url": [ignore_empty, unicode_safe, url_validator],
    }

[![Tests](https://github.com/DataShades/ckanext-parquet/workflows/Tests/badge.svg?branch=main)](https://github.com/Link Digital/ckanext-parquet/actions)

# ckanext-parquet

A CKAN extension that adds a Parquet file viewer to CKAN.

![View example](https://raw.githubusercontent.com/DataShades/ckanext-parquet/refs/heads/master/docs/view_example.png)

Features:
- View Parquet files directly in CKAN
- Supports large files with infinite scrolling
- Column sorting
- Metadata display

## Requirements

Compatibility with core CKAN versions:

| CKAN version    | Compatible?   |
| --------------- | ------------- |
| 2.9 and earlier | no            |
| 2.10            | yes           |
| 2.11            | yes           |


## Installation

To install ckanext-parquet:

1. Activate your CKAN virtual environment, for example:
```sh
. /usr/lib/ckan/default/bin/activate
```

2. Clone the source and install it on the virtualenv
```sh
git clone https://github.com/DataShades/ckanext-parquet.git
cd ckanext-parquet
pip install -e .
```

3. Add `parquet_view` to the `ckan.plugins` and `ckan.views.default_views` settings in your CKAN
   config file.

4. Restart CKAN. For example if you've deployed CKAN with Apache on Ubuntu:
```sh
sudo service apache2 reload
```

## Developer installation

To install ckanext-parquet for development, activate your CKAN virtualenv and
do:
```sh
git clone https://github.com/DataShades/ckanext-parquet.git
cd ckanext-parquet
pip install -e .
```

## Tests

To run the tests, do:
```sh
pytest --ckan-ini=test.ini
```

## License

[AGPL](https://www.gnu.org/licenses/agpl-3.0.en.html)

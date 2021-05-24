# Configuration file for the Sphinx documentation builder.
#
# This file only contains a selection of the most common options. For a full
# list see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Path setup --------------------------------------------------------------

# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. If the directory is relative to the
# documentation root, use os.path.abspath to make it absolute, like shown here.
#
import os
import sys

# Adding Kappa source directory for accessing Kappa version
sys.path.insert(0, os.path.abspath('../..'))
import kappa


# -- Project information -----------------------------------------------------

project = 'Kappa'
copyright = '2021, kappa.org'
author = 'kappa.org'
version = kappa.__version__


# -- General configuration ---------------------------------------------------

# master_docs = 'index' is the default value for sphinx after version 2. Although
# readthedocs.org by default will reset this to the old default value "contents"
# which breaks the build. Hence explicitly setting it here to "index".
# See https://github.com/readthedocs/readthedocs.org/issues/2149
master_doc = 'index'

# Add any Sphinx extension module names here, as strings. They can be
# extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
# ones.
extensions = [
    "sphinx.ext.autodoc",
    "sphinx.ext.napoleon",
    "sphinx_click.ext",
    "recommonmark",
    "sphinxcontrib.spelling",
]

# Add any paths that contain templates here, relative to this directory.
templates_path = ['_templates']

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
# This pattern also affects html_static_path and html_extra_path.
exclude_patterns = []


# -- Options for HTML output -------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.
#
html_theme = "sphinx_rtd_theme"
html_theme_options = {
    "collapse_navigation": True,
    "navigation_depth": 4,
    "display_version": True,
    "includehidden": False,
    "titles_only": False,
}


# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".
html_static_path = ['_static']

# Private dictionary for spell checker
spelling_word_list_filename = ['kappa_wordlist.txt']

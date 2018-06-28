SHELL := /bin/bash -o pipefail -e
.SUFFIXES:

LESS_BIN := node_modules/less/bin/lessc
CLEANCSS_BIN := node_modules/clean-css/bin/cleancss
PREFIXCSS_BIN := node_modules/postcss-cli/bin/postcss --use autoprefixer
MIN_CSS_FILES := css/site.min.css css/bootstrap.min.css
PREFIX_CSS_FILES := $(MIN_CSS_FILES:%.prefixed.css=%.css)
CSS_FILES := $(MIN_CSS_FILES:%.min.css=%.css)

all: $(MIN_CSS_FILES)

%.min.css: %.prefixed.css
	$(CLEANCSS_BIN) $< -o $@

%.prefixed.css: %.css
	$(PREFIXCSS_BIN) $< > $@

.SECONDARY: $(CSS_FILES)

css/%.css: less/%.less
	$(LESS_BIN) $< > $@

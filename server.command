#!/bin/bash

DOCUMENT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

php -S 0.0.0.0:8000 -t "${DOCUMENT_ROOT}"

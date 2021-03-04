publish:
	npm publish --dry-run

install:
	npm install

lint:
	npx eslint .

run-linter:
	npx eslint --fix .

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

.PHONY: test

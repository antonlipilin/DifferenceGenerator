publish:
	npm publish --dry-run

install:
	npm install

lint:
	npx eslint .

run-linter:
	npx eslint --fix .

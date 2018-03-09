d:
	gatsby develop

thalhalla: clean public
	npm run deploy

public:
	gatsby build

clean:
	rm -Rf public

ci: clean public

surge:
	gatsby build
	surge public -d austinbsides2018.surge.sh

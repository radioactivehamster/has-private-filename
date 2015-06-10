docdir = doc

.PHONEY: doc

all: check doc

check:
	@mocha

clean:
	@$(MAKE) -C $(docdir) clean

doc:
	@$(MAKE) -C $(docdir)

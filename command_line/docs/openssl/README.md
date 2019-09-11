# openssl

OpenSSL command line tool

## Table of contents

* [options](#options)
* [Show the dates of a certificate](#show-the-dates-of-a-certificate)
* [Show all the DNS names of a certificate](#show-all-the-dns-names-of-a-certificate)
* [Extract private key from .pfx file](#extract-private-key-from-pfx-file)
* [Convert private pemfile to private keyfile](#convert-private-pemfile-to-private-keyfile)
* [Extract certificate from .pfx file](#extract-certificate-from-pfx-file)
    
### options
`-dates` - Print the start and expiry date of a certificate

`-in` - The input file to read from

`-noout` - Do not output the encoded version of the request

`-text` - Print the full certificate in text form

`-nocerts` - Do not output certificates

`-nodes` - Do not encrypt private keys

`-nokeys` - Do not output private keys 

### Show the dates of a certificate
```
openssl x509 -noout -dates -in SSLCERT

dates can be replaced with enddate or startdate to only show the notAfter or notBefore field.
```

### Show all the DNS names of a certificate
```
openssl x509 -noout -text -in SSLCERT | grep DNS
```

### Extract private key from .pfx file
```
openssl pkcs12 -in certname.pfx -nocerts -out key.pem -nodes
```

### Convert private pemfile to private keyfile
```
openssl rsa -in key.pem -out server.key
```

### Extract certificate from .pfx file
```
openssl pkcs12 -in certname.pfx -nokeys -out cert.pem
```

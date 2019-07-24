# openssl

OpenSSL command line tool

## Table of contents

* [options](#options)
* [Show the dates of a certificate](#show-the-dates-of-a-certificate)
* [Show all the DNS names of a certificate](#show-all-the-dns-names-of-a-certificate)
    
### options
`-dates` - Print the start and expiry date of a certificate

`-in` - The input file to read from

`-noout` - Do not output the encoded version of the request

`-text` - Print the full certificate in text form

### Show the dates of a certificate
```
openssl x509 -noout -dates -in SSLCERT

dates can be replaced with enddate or startdate to only show the notAfter or notBefore field.
```

### Show all the DNS names of a certificate
```
openssl x509 -noout -text -in SSLCERT | grep DNS
```

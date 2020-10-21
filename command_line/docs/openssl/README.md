# openssl

OpenSSL command line tool

## Table of contents

* [options](#options)
* [Show the dates of a certificate](#show-the-dates-of-a-certificate)
* [Show all the DNS names of a certificate](#show-all-the-dns-names-of-a-certificate)
* [Extract private key from .pfx file](#extract-private-key-from-pfx-file)
* [Convert private pemfile to private keyfile](#convert-private-pemfile-to-private-keyfile)
* [Extract certificate from .pfx file](#extract-certificate-from-pfx-file)
* [Extract chain of certificates from .pfx file](#extract-chain-of-certificates-from-pfx-file)
    
### options
`-dates` - Print the start and expiry date of a certificate

`-in` - The input file to read from

`-noout` - Do not output the encoded version of the request

`-text` - Print the full certificate in text form

`-nocerts` - Do not output certificates

`-nodes` - Do not encrypt private keys

`-nokeys` - Do not output private keys 

`-cacerts` - Only output CA certificates (not client certificates)

`-inform` - The input format (der or pem)

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

### Extract chain of certificates from .pfx file
```
openssl pkcs12 -in certname.pfx -nodes -nokeys -cacerts -out chain_ca.crt
```

### Extract chain of certificates based on certificate file
Find the issuer of the certificate.
```
openssl x509 -in cert.pem -text -noout | grep -i "issuer"

Issuer: C=.. CN=Some CN name authority
        CA Issuers - URI:http://url.to.ca.crt
````
Download the CA issuer certificate
```
curl -i ca1.crt http://url.to.ca.crt
```
Check if the cert also has a CA issuer
```
openssl x509 -in ca1.crt -text -noout | grep -i issuer
```
If the certificate also has a CA issuer, repeat the process until you reach to root CA (one who doesn't have a CA issuer).

If you get the following error, it means that the cert format is DER
```
unable to load certificate
140639392556872:error:0906D06C:PEM routines:PEM_read_bio:no start line:pem_lib.c:703:Expecting: TRUSTED CERTIFICATE
```
Then you need to use the -inform option to let openssl know it is DER format
```
openssl x509 -in ca1.crt -inform DER -text -noout | grep -i issuer
```
Once you have all the certs you can create the chain by converting them to pem format and using cat to combine them in one pem file.
```
openssl x509 -inform DER -in ca1.crt -outform PEM -out ca1.pem

cat ca1.pem ca2.pem ... caX.pem > chain_ca.pem
```

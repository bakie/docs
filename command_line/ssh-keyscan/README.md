# ssh-keyscan

gather ssh public keys

## Table of contents
* [options](#options)
* [Accept ECDSA key fingerprint of list of servers](#accept-ecdsa-key-fingerprint-of-list-of-servers)

### options
`-H` - Hash all hostnames and addresses in the output.

### Accept ECDSA key fingerprint of list of servers
This will gather the SSH public key.
When you then ssh to the server you will not need to see the message anymore that you need to accept the key.
```
for h in servername1 servername2 servername3; do ssh-keyscan -H $h.as.ad.digital.accenture.com >> ~/.ssh/known_hosts; done
```

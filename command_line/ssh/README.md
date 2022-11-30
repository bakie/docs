# ssh

OpenSSH SSH client (remote login program)

## Table of contents

* [Tunneling](#tunneling)
    * [Local port forwarding](#local-port-forwarding)
    * [Remote port forwarding](#remote-port-forwarding)

## Tunneling
### Local port forwarding
```
ssh -nNT -L LOCAL_PORT:REMOTE_HOST:REMOTE_PORT DESTINATION

Options:
-n  Redirects stdin from
-N  Do not execute a remote command.
-T  Disable pseudo-terminal allocation
```
#### Examples
Access website.com on localhost via port 8080. Helpful when website.com is being blocked by a firewall
``` 
ssh -nNT -L 8080:website.com:80 user@server.com
```
Connect to a database which can only be accessed from localhost and not remotely.
```
ssh -nNT -L 33306:localhost:3306 user@server.com
mysql -h localhost -p 33306
```

### Remote port forwarding
Make sure you enabled the GatewayPorts in your sshd_config
```
ssh -nNT -R LOCAL_PORT:REMOTE_HOST:REMOTE_PORT DESTINATION
```
#### Examples
Make your localhost port 3000 available on the server on port 9000
```
ssh -nNT -R 9000:localhost:3000 user@server.com
```

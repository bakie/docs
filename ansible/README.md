# Ansible

## Table of contents
* [Ansible for windows on Windows 10 WSL](#ansible_for_windows_on_windows_10_wsl)

### Ansible for Windows on Windows 10 WSL
First install pip and use pip to install ansible
```
sudo apt install python3-pip --no-install-recommends
pip3 install ansible==8.4.0
```
When installing ansible on WSL the executable is being placed in /home/<USER>/.local/bin. We need to add this to the $PATH environment
```
PATH=$PATH:/home/<USER>/.local/bin
```
Next create a test dir and add a hosts file
```
mkdir test_ansible
cd test_ansible
touch hosts
```
Add the following in the hosts file. x.x.x.x is the IP of the windows target
```
[win]
x.x.x.x

[win:vars]
ansible_user=someone@your.domain
ansible_port=5985
ansible_connection=winrm
ansible_winrm_transport=kerberos
```
Next install required packages for pywinrm kerberos
```
sudo apt install gcc
sudo apt install python-dev-is-ython3 libkrb5-dev krb5-user --no-install-recommends
pip3 install pywinrm[kerberos]
```
Configure the kerberos config. Add the following in /etc/krb5.conf 
```
[realms]
  YOUR.DOMAIN = {
    kdc = <DNS_OF_FIRST_DOMAIN_CONTROLLER>
    kdc = <DNS_OF_SECOND_DOMAIN_CONTROLLER_IF_APPLICABLE>
  }
[domain_realm]
  .your.domain = YOUR.DOMAIN
```
Test if everything works. This will ask for your AD user password
```
ansible all -i hosts -m win_ping --ask-pass
```
If all went well you should see the following
```
SSH password:
x.x.x.x | SUCCESS => {
  "changed": false,
  "ping": "pong"
}
```

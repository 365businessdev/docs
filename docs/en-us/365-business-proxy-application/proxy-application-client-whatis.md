# What is the Proxy Application Client?

The 365 business Proxy Application Client is a Windows service that executes the installed plugins and establishes the data connection to the Proxy Application Server.

Each proxy application client is identified by a client ID (GUID) and executes the jobs addressed to it via the installed [plugins](plugins.md).

<div class="alert alert-notice">
    <i class="fa-light fa-hand-point-up fa-lg"></i> <strong>Good to know</strong> By default, the proxy application client is executed in the <strong>local system</strong> context, but depending on the installed plugin (e.g. file plugin), execution in the domain context may be necessary.
</div>

<br/>

## The task of the Proxy Application Client

The 365 business Proxy Application Client performs the following functions:

1. establishing communication between 365 business Proxy Application Service and client.
2. execution of the plugins and plugin jobs (e.g. write file)

# See also

- [What is 365 business Proxy Application?](proxy-application-whatis.md)
- [What are 365 business Proxy Application plugins?](plugins.md)




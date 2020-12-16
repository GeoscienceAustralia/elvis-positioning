# Alternative Deployment

## Overview

This document describes steps and resources required to deploy a new instance of positioning application/web site hosted on AWS/EC2.

## Prerequisites

Aso of this writing (16/12/2020) `elevation` and `positioning` applications/web sites use the same token mechanism and the `positioning` application/web site needs to be installed on the same instance with `elevation`. See [this](https://github.com/GeoscienceAustralia/fsdf-elvis/blob/master/documentation/alt_deployment.md) for the deployment of `elevation`.

## Steps

1. Copy the `elevation-positioning/code-deploy/alt_deployment` script to the instance.

2. Run the script once, e.g. `/bin/bash alt_deployment`

3. If domain names other than `positioning.fsdf.org.au` or `positioning-dev.*` are used, edit the `/etc/httpd/conf.d/positioning.conf` file.

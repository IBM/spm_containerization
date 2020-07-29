# What's new

* Chart realignment.

### Fixes

## Prerequisites

* See README.md

# Version History

## v1.5.0
* Added a check before creating deployment to see if multi-instance MQ is desired.
* Added values for use in multi-instance MQ, with both static and dynamic storage.
* Added a stateful set YAML file for use in multi-instance MQ.
* Added PV and PVC YAML files for use in multi-instance MQ.

## v1.4.0

* Moved Liberty configuration fragment to `apps` Chart.
* Added pre-install hook to encrypt the password for use in Liberty
* Added support for a multi-instance topology

## v1.3.0

* Revert to pre-created certificates

## v1.2.0

* Add support for running with multi-instance IBM MQ hosted outside Kubernetes

## v1.1.0

* Initial release

## v1.0.0

* Limited availability preview
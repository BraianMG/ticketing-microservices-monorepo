## Commands
- After launching our pods with `skaffold dev`, run `kubectl port-forward <nats-pod-name> 4222:4222` and do not close the terminal (for __client__)
- After launching our pods with `skaffold dev`, run `kubectl port-forward <nats-pod-name> 8222:8222` and do not close the terminal (for __monitoring__)
- Then go to `localhost:8222/streaming`
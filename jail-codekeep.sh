#!/bin/bash
# Block all outbound NEW connections from the codekeep container.
# Incoming (port-forwarded) traffic + established replies still work.
# Run this after codekeep starts or restarts.

CONTAINER="codekeep"
IP=$(docker inspect "$CONTAINER" --format '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' 2>/dev/null)

if [ -z "$IP" ]; then
  echo "codekeep not running, skipping."
  exit 0
fi

# Remove old rule if any (ignore errors)
iptables -D DOCKER-USER -s "$IP" -m state --state NEW -j DROP 2>/dev/null

# Add fresh rule
iptables -I DOCKER-USER -s "$IP" -m state --state NEW -j DROP
echo "codekeep ($IP) outbound blocked."

Compose Kafka moved from Confluent 7.5 + ZooKeeper to `apache/kafka:4.4.0`
in KRaft mode (single combined broker/controller, new `kafka_kraft_data`
volume — the old ZooKeeper-era `kafka_data`/`zookeeper_*` volumes are no
longer used and can be removed with `docker volume rm`); helm `cpp-env`
Kafka 3.8 → 4.4. Jaeger moved to v2 (`jaegertracing/jaeger:2.22.0`, same
UI/OTLP ports). Grafana 11.6 → 13.3, Prometheus 3.15.1, mailpit 1.33,
postgres_exporter 0.20.1, redis_exporter 1.96.0, kafka_exporter 1.11.0.

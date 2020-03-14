---
id: d2s-rml
title: Run RML transformation
---

The [RMLStreamer](https://github.com/RMLio/RMLStreamer/) is a scalable implementation of the [RML Specifications](https://rml.io/specs/rml/).

Use the [RDF Mapping Language (RML)](https://rml.io/) to map your structured data (CSV, TSV, SQL, XML, JSON, YAML) to RDF. 

## Download files to convert

The following documentation will use the COHD clinical data CSV as example. Download the dataset:

```shell
d2s download cohd
```

> Download script defined in [datasets/cohd/download/download.sh](https://github.com/MaastrichtU-IDS/d2s-transform-template/blob/master/datasets/cohd/download/download.sh).

> Downloaded files goes to `workspace/input/cohd`.

## Start Apache Flink

Start [Apache Flink](https://flink.apache.org/), required to stream the files:

```shell
d2s start rmljob rmltask
```

> Access at http://localhost:8078

## Run RMLStreamer

The [RML mappings](https://rml.io/specs/rml/) needs to be defined as `rml-mappings.ttl` in the mapping folder of the dataset, e.g. `datasets/dataset_id/mapping/rml-mappings.ttl`

We provide an example converting a sample of [COHD](https://github.com/MaastrichtU-IDS/d2s-transform-template/blob/master/datasets/cohd/mapping/rml-mappings.ttl) (clinical concepts co-occurences from FDA reports) to the [BioLink](https://biolink.github.io/biolink-model/docs/) model:

```shell
d2s rml cohd
```

> See running RML executions at http://localhost:8078

> Output goes to `workspace/graphdb-import/rml-output-sample.nt`

## RML Specifications

RML Specifications can be found as a [W3C unofficial draft](https://rml.io/specs/rml/).

See the [rml.io](https://rml.io/) website for more documentation about RML and the various tools built and deployed by Ghent University.
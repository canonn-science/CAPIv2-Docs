---
sidebarDepth: 3
---

# Report Types

Canonn has different endpoints for each report type, you can see the ones we support below. Please note there are some required information, and each report endpoint may have different requirements.

There are a few that all contain similar requirements such as the site type, in most cases you should send the journal name. We would prefer that you compare the journal ID via that sites type and send us our version of the journal name (without the prefix `$` and suffix `_name` and all lowercase). In the case where a site may not have a correct journal type yet such as Guardian Ruins & structures, Thargoid Structures, and Thargoid barnacles you should send our type.

Alternatively for sites that support it you can send the localized codex name so long as it is in english.

Also note that for all types there is an "Unknown" type which Canonn uses for old data that has not yet been checked for an updated type. You are welcome to filter this data out should you wish to pull data on known sites.

## (AP) - Amphora Plants

Report Endpoint: `POST /apreports`

Example Report Structure with minimum required data:

```json
{
  "userType": "pc",
  "reportType": "new",
  "systemName": "PRU AED XO-R D4-50",
  "bodyName": "PRU AED XO-R D4-50 B 2",
  "latitude": 1.6085,
  "longitude": -116.2772,
  "type": "Amphora Plant",
  "cmdrName": "Namix",
  "isBeta": false,
  "clientVersion": "EDMC-Canonn.2.0.1",
  "reportStatus": "pending"
}
```

Known Bark Mound types, see an update list you can query the following [endpoint](https://api.canonn.tech/aptypes):

```json
[
  {
    "id": 1,
    "type": "Unknown",
    "journalName": "",
    "journalID": null
  },
  {
    "id": 2,
    "type": "Amphora Plant",
    "journalName": "codex_ent_vents",
    "journalID": 2101400
  }
]
```

## (BM) - Bark Mounds

Report Endpoint: `POST /bmreports`

Example Report Structure with minimum required data:

```json
{
  "userType": "pc",
  "reportType": "new",
  "systemName": "Bleethuae NI-B d674",
  "bodyName": "Bleethuae NI-B d674 2 d a",
  "latitude": -28.247204,
  "longitude": -118.083321,
  "type": "Bark Mound",
  "cmdrName": "InfiniteDreamer",
  "isBeta": false,
  "clientVersion": "EDMC-Canonn.2.0.1",
  "reportStatus": "pending"
}
```

Known Bark Mound types, see an update list you can query the following [endpoint](https://api.canonn.tech/bmtypes):

```json
[
  {
    "id": 1,
    "type": "Unknown",
    "journalName": "",
    "journalID": null
  },
  {
    "id": 2,
    "type": "Bark Mound",
    "journalName": "codex_ent_cone",
    "journalID": 2100301
  }
]
```

## (BT) - Brain Trees

Report Endpoint: `POST /btreports`

Example Report Structure with minimum required data:

```json
{
  "userType": "pc",
  "reportType": "new",
  "systemName": "Synuefe VN-W b46-0",
  "bodyName": "Synuefe VN-W b46-0 B 2",
  "latitude": -8.061136,
  "longitude": -162.813492,
  "type": "Roseum Brain Tree",
  "cmdrName": "Shoja",
  "isBeta": false,
  "clientVersion": "EDMC-Canonn.2.0.1",
  "reportStatus": "pending"
}
```

Known Brain Tree types, see an update list you can query the following [endpoint](https://api.canonn.tech/bttypes):

```json
[
  {
    "id": 1,
    "type": "Unknown",
    "journalName": "",
    "journalID": null
  },
  {
    "id": 2,
    "type": "Roseum Brain Tree",
    "journalName": "codex_ent_seed",
    "journalID": 2100201
  },
  {
    "id": 3,
    "type": "Gypseeum Brain Tree",
    "journalName": "codex_ent_seedabcd_01",
    "journalID": 2100202
  },
  {
    "id": 4,
    "type": "Ostrinum Brain Tree",
    "journalName": "codex_ent_seedabcd_02",
    "journalID": 2100203
  },
  {
    "id": 5,
    "type": "Viride Brain Tree",
    "journalName": "codex_ent_seedabcd_03",
    "journalID": 2100204
  },
  {
    "id": 6,
    "type": "Lividum Brain Tree",
    "journalName": "codex_ent_seedefgh",
    "journalID": 2100205
  },
  {
    "id": 7,
    "type": "Aureum Brain Tree",
    "journalName": "codex_ent_seedefgh_01",
    "journalID": 2100206
  },
  {
    "id": 8,
    "type": "Puniceum Brain Tree",
    "journalName": "codex_ent_seedefgh_02",
    "journalID": 2100207
  },
  {
    "id": 9,
    "type": "Lindigoticum Brain Tree",
    "journalName": "codex_ent_seedefgh_03",
    "journalID": 2100208
  }
]
```

## (CS) - Crystalline Shards

Report Endpoint: `POST /csreports`

Example Report Structure with minimum required data:

```json
{
  "userType": "pc",
  "reportType": "new",
  "systemName": "Phroea Hypai BQ-E c28-4",
  "bodyName": "Phroea Hypai BQ-E c28-4 EF 1 b",
  "latitude": 5.421538,
  "longitude": -116.672745,
  "type": "Crystalline Shards",
  "cmdrName": "Ernest T Bass",
  "isBeta": false,
  "clientVersion": "EDMC-Canonn.2.0.1",
  "reportStatus": "pending"
}
```

Known types, see an update list you can query the following [endpoint](https://api.canonn.tech/cstypes):

```json
[
  {
    "id": 1,
    "type": "Unknown",
    "journalName": "",
    "journalID": null
  },
  {
    "id": 2,
    "type": "Crystalline Shards",
    "journalName": "codex_ent_ground_struct_ice",
    "journalID": 2101500
  }
]
```

## (FG) - Fungal Gourds

Report Endpoint: `POST /fgreports`

Example Report Structure with minimum required data:

```json
{
  "userType": "pc",
  "reportType": "new",
  "systemName": "Prooe Flyuae FQ-Y e662",
  "bodyName": "Prooe Flyuae FQ-Y e662 3 b a",
  "latitude": 35.651417,
  "longitude": -46.550655,
  "type": "Luteolum Anemone",
  "cmdrName": "Chrismasterski",
  "isBeta": false,
  "clientVersion": "EDMC-Canonn.2.0.1",
  "reportStatus": "pending"
}
```

Known types, see an update list you can query the following [endpoint](https://api.canonn.tech/fgtypes):

```json
[
  {
    "id": 1,
    "type": "Unknown",
    "journalName": "",
    "journalID": null
  },
  {
    "id": 2,
    "type": "Luteolum Anemone",
    "journalName": "codex_ent_sphere",
    "journalID": 2100401
  },
  {
    "id": 3,
    "type": "Croceum Anemone",
    "journalName": "codex_ent_sphereabcd_01",
    "journalID": 2100402
  },
  {
    "id": 4,
    "type": "Puniceum Anemone",
    "journalName": "codex_ent_sphereabcd_02",
    "journalID": 2100403
  },
  {
    "id": 5,
    "type": "Roseum Anemone",
    "journalName": "codex_ent_sphereabcd_03",
    "journalID": 2100404
  },
  {
    "id": 6,
    "type": "Blatteum Bioluminescent Anemone",
    "journalName": "codex_ent_sphereefgh",
    "journalID": 2100405
  },
  {
    "id": 7,
    "type": "Rubeum Bioluminescent Anemone",
    "journalName": "codex_ent_sphereefgh_01",
    "journalID": 2100406
  },
  {
    "id": 8,
    "type": "Prasinum Bioluminescent Anemone",
    "journalName": "codex_ent_sphereefgh_02",
    "journalID": 2100407
  },
  {
    "id": 9,
    "type": "Roseum Bioluminescent Anemone",
    "journalName": "codex_ent_sphereefgh_03",
    "journalID": 2100408
  }
]
```

## (FM) - Fumaroles

Report Endpoint: `POST /fmreports`

Example Report Structure with minimum required data:

```json
{
  "userType": "pc",
  "reportType": "new",
  "systemName": "Flyae Flyi KB-W d2-1103",
  "bodyName": "Flyae Flyi KB-W d2-1103 BC 5 a",
  "latitude": 58.798756,
  "longitude": 10.918672,
  "type": "Water Ice Fumarole",
  "cmdrName": "Chrismasterski",
  "isBeta": false,
  "clientVersion": "EDMC-Canonn.2.0.1",
  "reportStatus": "pending"
}
```

Known types, see an update list you can query the following [endpoint](https://api.canonn.tech/fmtypes):

```json
[
  {
    "id": 1,
    "type": "Unknown",
    "journalName": "",
    "journalID": null
  },
  {
    "id": 2,
    "type": "Sulphur Dioxide Fumarole",
    "journalName": "codex_ent_fumarole_sulphurdioxidemagma",
    "journalID": 1400102
  },
  {
    "id": 3,
    "type": "Water Fumarole",
    "journalName": "codex_ent_fumarole_watergeysers",
    "journalID": 1400108
  },
  {
    "id": 4,
    "type": "Silicate Vapour Fumarole",
    "journalName": "codex_ent_fumarole_silicatevapourgeysers",
    "journalID": 1400114
  },
  {
    "id": 5,
    "type": "Sulphur Dioxide Ice Fumarole",
    "journalName": "codex_ent_icefumarole_sulphurdioxidemagma",
    "journalID": 1400152
  },
  {
    "id": 6,
    "type": "Water Ice Fumarole",
    "journalName": "codex_ent_icefumarole_watergeysers",
    "journalID": 1400158
  },
  {
    "id": 7,
    "type": "Carbon Dioxide Ice Fumarole",
    "journalName": "codex_ent_icefumarole_carbondioxidegeysers",
    "journalID": 1400159
  },
  {
    "id": 8,
    "type": "Ammonia Ice Fumarole",
    "journalName": "codex_ent_icefumarole_ammoniageysers",
    "journalID": 1400160
  },
  {
    "id": 9,
    "type": "Methane Ice Fumarole",
    "journalName": "codex_ent_icefumarole_methanegeysers",
    "journalID": 1400161
  },
  {
    "id": 10,
    "type": "Nitrogen Ice Fumarole",
    "journalName": "codex_ent_icefumarole_nitrogengeysers",
    "journalID": 1400162
  },
  {
    "id": 11,
    "type": "Silicate Vapour Ice Fumarole",
    "journalName": "codex_ent_icefumarole_silicatevapourgeysers",
    "journalID": 1400164
  }
]
```

## (GB) - Guardian Beacons

Report Endpoint: `POST /gbreports`

::: warning
Please note this report endpoint contains a non-typical structure compared to most of our report endpoints
:::

Example Report Structure with minimum required data:

```json
{
  "userType": "pc",
  "reportType": "new",
  "systemName": "SYNUEFE IL-N C23-15",
  "bodyName": "SYNUEFE IL-N C23-15 2 A",
  "messageSystem": "SYNUEFE IL-N C23-19",
  "messageBody": "SYNUEFE IL-N C23-19 B 2",
  "messageLatitude": 12.18,
  "messageLongitude": 44.31,
  "cmdrName": "joulupunikki",
  "isBeta": false,
  "clientVersion": "EDMC-Canonn.2.0.1",
  "reportStatus": "pending"
}
```

Guardian Beacons have no known type.

## (GEN) - Generation Ships

Report Endpoint: `POST /genreports`

::: warning
Please note this report endpoint contains a non-typical structure compared to most of our report endpoints
:::

Example Report Structure with minimum required data:

```json
{
  "userType": "pc",
  "reportType": "new",
  "systemName": "MU CASSIOPEIA",
  "orbitBody": "MU CASSIOPEIA C 1",
  "shipName": "Artemis",
  "directionSystem": null,
  "distance": null,
  "cmdrName": "zzz_Unknown",
  "isBeta": false,
  "clientVersion": "EDMC-Canonn.2.0.1",
  "reportStatus": "pending"
}
```

Generation Ships have no known type.

## (GR) - Guardian Ruins

Report Endpoint: `POST /grreports`

::: warning
Please note this report endpoint contains a non-typical structure compared to most of our report endpoints
:::

Example Report Structure with minimum required data:

```json
{
  "userType": "pc",
  "reportType": "new",
  "systemName": "SYNUEFE XR-H D11-102",
  "bodyName": "SYNUEFE XR-H D11-102 1 B",
  "latitude": -31.7347,
  "longitude": -128.9212,
  "type": "Beta",
  "cmdrName": "zzz_Unknown",
  "isBeta": false,
  "clientVersion": "EDMC-Canonn.2.0.1",
  "reportStatus": "pending"
}
```

Known types, see an update list you can query the following [endpoint](https://api.canonn.tech/grtypes):

```json
[
  {
    "id": 1,
    "type": "Unknown",
    "journalName": ""
  },
  {
    "id": 2,
    "type": "Alpha",
    "journalName": ""
  },
  {
    "id": 3,
    "type": "Beta",
    "journalName": ""
  },
  {
    "id": 4,
    "type": "Gamma",
    "journalName": ""
  }
]
```

## (GS) - Guardian Structures

Report Endpoint: `POST /gsreports`

::: warning
Please note this report endpoint contains a non-typical structure compared to most of our report endpoints
:::

Example Report Structure with minimum required data:

```json
{
  "userType": "pc",
  "reportType": "new",
  "systemName": "SYNUEFE LY-I B42-2",
  "bodyName": "SYNUEFE LY-I B42-2 C 2",
  "latitude": 52.6791,
  "longitude": 115.2503,
  "type": "Fistbump",
  "hasDatabank": false,
  "cmdrName": "Doom666",
  "isBeta": false,
  "clientVersion": "EDMC-Canonn.2.0.1",
  "reportStatus": "pending"
}
```

Known types, see an update list you can query the following [endpoint](https://api.canonn.tech/gstypes):

```json
[
  {
    "id": 1,
    "type": "Unknown",
    "journalName": "",
    "blueprint": null
  },
  {
    "id": 2,
    "type": "Lacrosse",
    "journalName": "ancient_tiny_001",
    "blueprint": null
  },
  {
    "id": 3,
    "type": "Crossroads",
    "journalName": "ancient_tiny_002",
    "blueprint": null
  },
  {
    "id": 4,
    "type": "Fistbump",
    "journalName": "ancient_tiny_003",
    "blueprint": null
  },
  {
    "id": 5,
    "type": "Hammerbot",
    "journalName": "ancient_small_001",
    "blueprint": "weapon"
  },
  {
    "id": 6,
    "type": "Bear",
    "journalName": "ancient_small_002",
    "blueprint": "weapon"
  },
  {
    "id": 7,
    "type": "Bowl",
    "journalName": "ancient_small_003",
    "blueprint": "weapon"
  },
  {
    "id": 8,
    "type": "Turtle",
    "journalName": "ancient_small_005",
    "blueprint": "module"
  },
  {
    "id": 9,
    "type": "Robolobster",
    "journalName": "ancient_medium_001",
    "blueprint": "vessel"
  },
  {
    "id": 10,
    "type": "Squid",
    "journalName": "ancient_medium_002",
    "blueprint": "vessel"
  },
  {
    "id": 11,
    "type": "Stickyhand",
    "journalName": "ancient_medium_003",
    "blueprint": "vessel"
  }
]
```

## (GV) - Gas Vents

Report Endpoint: `POST /gvreports`

Example Report Structure with minimum required data:

```json
{
  "userType": "pc",
  "reportType": "new",
  "systemName": "Flyae Flyi NO-H d10-443",
  "bodyName": "Flyae Flyi NO-H d10-443 1 c a",
  "latitude": -22.072763,
  "longitude": -155.074356,
  "type": "Sulphur Dioxide Gas Vent",
  "cmdrName": "Chrismasterski",
  "isBeta": false,
  "clientVersion": "EDMC-Canonn.2.0.1",
  "reportStatus": "pending"
}
```

Known types, see an update list you can query the following [endpoint](https://api.canonn.tech/gvtypes):

```json
[
  {
    "id": 1,
    "type": "Unknown",
    "journalName": "",
    "journalID": null
  },
  {
    "id": 2,
    "type": "Sulphur Dioxide Gas Vent",
    "journalName": "codex_ent_gas_vents_sulphurdioxidemagma",
    "journalID": 1400402
  },
  {
    "id": 3,
    "type": "Water Gas Vent",
    "journalName": "codex_ent_gas_vents_watergeysers",
    "journalID": 1400408
  },
  {
    "id": 4,
    "type": "Carbon Dioxide Gas Vent",
    "journalName": "codex_ent_gas_vents_carbondioxidegeysers",
    "journalID": 1400409
  },
  {
    "id": 5,
    "type": "Silicate Vapour Gas Vent",
    "journalName": "codex_ent_gas_vents_silicatevapourgeysers",
    "journalID": 1400414
  }
]
```

## (GY) - Geysers

Report Endpoint: `POST /gyreports`

Example Report Structure with minimum required data:

```json
{
  "userType": "pc",
  "reportType": "new",
  "systemName": "Flyae Flyi KB-W d2-1103",
  "bodyName": "Flyae Flyi KB-W d2-1103 BC 5 a",
  "latitude": 17.83189,
  "longitude": 151.059326,
  "type": "Water Ice Geyser",
  "cmdrName": "Chrismasterski",
  "isBeta": false,
  "clientVersion": "EDMC-Canonn.2.0.1",
  "reportStatus": "pending"
}
```

Known types, see an update list you can query the following [endpoint](https://api.canonn.tech/gytypes):

```json
[
  {
    "id": 1,
    "type": "Unknown",
    "journalName": "",
    "journalID": null
  },
  {
    "id": 2,
    "type": "Water Geyser",
    "journalName": "codex_ent_geysers_watergeysers",
    "journalID": 1400208
  },
  {
    "id": 3,
    "type": "Water Ice Geyser",
    "journalName": "codex_ent_icegeysers_watergeysers",
    "journalID": 1400258
  },
  {
    "id": 4,
    "type": "Carbon Dioxide Ice Geyser",
    "journalName": "codex_ent_icegeysers_carbondioxidegeysers",
    "journalID": 1400259
  },
  {
    "id": 5,
    "type": "Ammonia Ice Geyser",
    "journalName": "codex_ent_icegeysers_ammoniageysers",
    "journalID": 1400260
  },
  {
    "id": 6,
    "type": "Methane Ice Geyser",
    "journalName": "codex_ent_icegeysers_methanegeysers",
    "journalID": 1400261
  },
  {
    "id": 7,
    "type": "Nitrogen Ice Geyser",
    "journalName": "codex_ent_icegeysers_nitrogengeysers",
    "journalID": 1400262
  }
]
```

## (LS) - Lava Spouts

Report Endpoint: `POST /lsreports`

Example Report Structure with minimum required data:

```json
{
  "userType": "pc",
  "reportType": "new",
  "systemName": "Flyae Flyi VO-Q d5-378",
  "bodyName": "Flyae Flyi VO-Q d5-378 C 2",
  "latitude": -43.20908,
  "longitude": -109.786705,
  "type": "Silicate Magma Lava Spout",
  "cmdrName": "Chrismasterski",
  "isBeta": false,
  "clientVersion": "EDMC-Canonn.2.0.1",
  "reportStatus": "pending"
}
```

Known types, see an update list you can query the following [endpoint](https://api.canonn.tech/lstypes):

```json
[
  {
    "id": 1,
    "type": "Unknown",
    "journalName": "",
    "journalID": null
  },
  {
    "id": 2,
    "type": "Silicate Magma Lava Spout",
    "journalName": "codex_ent_lava_spouts_silicatemagma",
    "journalID": 1400306
  },
  {
    "id": 3,
    "type": "Iron Magma Lava Spout",
    "journalName": "codex_ent_lava_spouts_ironmagma",
    "journalID": 1400307
  }
]
```

## (TB) - Thargoid Barnacles

Report Endpoint: `POST /tbreports`

::: warning
Please note this report endpoint contains a non-typical structure compared to most of our report endpoints
:::

Example Report Structure with minimum required data:

```json
{
  "userType": "pc",
  "reportType": "new",
  "systemName": "PLEIONE",
  "bodyName": "PLEIONE 11 A",
  "latitude": 2.3189,
  "longitude": 177.2434,
  "type": "Alpha",
  "cycle": "B",
  "cmdrName": "zzz_Unknown",
  "isBeta": false,
  "clientVersion": "EDMC-Canonn.2.0.1",
  "reportStatus": "pending"
}
```

Known types, see an update list you can query the following [endpoint](https://api.canonn.tech/tbtypes):

```json
[
  {
    "id": 1,
    "type": "Unknown",
    "metaAlloyCount": null
  },
  {
    "id": 2,
    "type": "Mega",
    "metaAlloyCount": null
  },
  {
    "id": 3,
    "type": "Alpha",
    "metaAlloyCount": 1
  },
  {
    "id": 4,
    "type": "Beta",
    "metaAlloyCount": 2
  },
  {
    "id": 5,
    "type": "Gamma",
    "metaAlloyCount": 3
  },
  {
    "id": 6,
    "type": "Delta",
    "metaAlloyCount": 4
  },
  {
    "id": 7,
    "type": "Epsilon",
    "metaAlloyCount": 5
  },
  {
    "id": 8,
    "type": "Zeta",
    "metaAlloyCount": null
  }
]
```

## (TS) - Thargoid Structures

Report Endpoint: `POST /tsreports`

::: warning
Please note this report endpoint contains a non-typical structure compared to most of our report endpoints
:::

Example Report Structure with minimum required data:

```json
{
  "userType": "pc",
  "reportType": "new",
  "systemName": "HIP 19026",
  "bodyName": "HIP 19026 B 1 C",
  "latitude": -17.9575,
  "longitude": -152.6994,
  "status": "Inactive",
  "cmdrName": "zzz_Unknown",
  "isBeta": false,
  "clientVersion": "EDMC-Canonn.2.0.1",
  "reportStatus": "pending"
}
```

Thargoid Structures have no known type. (Though work is being done to classify them)

## (TW) - Tube Worms

Report Endpoint: `POST /twreports`

Example Report Structure with minimum required data:

```json
{
  "userType": "pc",
  "reportType": "new",
  "systemName": "Byoomeae NY-R e4-4985",
  "bodyName": "Byoomeae NY-R e4-4985 5",
  "latitude": -4.245615,
  "longitude": 96.549957,
  "type": "Roseum Sinuous Tubers",
  "cmdrName": "Panhyper",
  "isBeta": false,
  "clientVersion": "EDMC-Canonn.2.0.1",
  "reportStatus": "pending"
}
```

Known types, see an update list you can query the following [endpoint](https://api.canonn.tech/twtypes):

```json
[
  {
    "id": 1,
    "type": "Unknown",
    "journalName": "",
    "journalID": null
  },
  {
    "id": 2,
    "type": "Roseum Sinuous Tubers",
    "journalName": "codex_ent_tube",
    "journalID": 2100501
  }
]
```

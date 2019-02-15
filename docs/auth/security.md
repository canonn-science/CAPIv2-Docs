# Security and Blacklists

While much of the data we gather is checked and verified there are some cases where data can be "faked" or sent improperly causing issues and/or incorrect records. To help us mantain a very strict level of quality control we maintain certain "blacklists" that are used both at the submission level and our verification level.

## Reasons for being Blacklisted

Below you will find some of the examples of blacklists that we currently use, a few of them are related to Journal Entries that we do not track and thus do not wish to receive the data, while the others related to clients and/or users which we have deemed to be using our API infrastructure improperly.

If you feel you or your software has been added to one of our blacklists due to an error you may contact CMDR DMehaffy on discord: `DMehaffy@1337`. 

::: danger
If we deem that you are using our API to attempt to track pilots locations, harass, abuse, or for any other reason that is deemed by us to be a negative influence related to the discovery and/or research of science related data. You will be blacklisted and will not be removed.

Attempting to circumvent this blacklist can be considered illegal in many countries.
:::

Please note that by using our API you agree to only use the data gathered in a positive or neutral light. You may not use our API for the purposes of tracking players, such as but not limited to PVP (Player vs Player) related combat. Canonn takes a zero tollerence policy on "one side agreed" PVP.

## Our Blacklists

All of our blacklists are freely open to be viewed, you may and are encourged to use them in your applications to ensure you are only sending data we want and need. Below you will find our common blacklists and the data they contain.

### Clients

Blacklisting of clients is typically only done when we deem a client to be sending improper data formats that can negatively impact our infrastructure. This may include the following reasons:

* Missing required information
* Sending improper type or status data on reports
* Large and damaging GET Requests
* Attempting to circumvent our rate limits
* Use of data in a negative way that disrupts Canonn's neutral status
* Other - discression of the Canonn R&D Team

To view our client blacklist you may use the following example on our Staging Server:

`GET https://api.canonn.tech:2053/excludeclients`

```json
[
  {
    "id": 10,
    "version": "testclient-0.0.1",
    "reason": "Sending beta data without properly tagging the data as true for \"isBeta\"",
    "created_at": "2019-02-15T08:35:16.000Z",
    "updated_at": "2019-02-15T08:35:16.000Z"
  }
]
```

### CMDRs

While CMDR blacklisting is quite rare, they are some cases of it. Typically we attempt to speak with the CMDR first before placing them on the blacklist, however if we are unable to contact them within 7 days of noticing the infraction, they will be blacklisted. If we believe false data was sent the data will be deleted and it is possible that we remove all the CMDR data from our servers.

A few reasons a CMDR can be blacklisted:

* Attempts to send false kill data related to Thargoids
* Sending false site reports
* Improperly using the API with the intent to cause outages
* Attempting to negatively impact the API for the use of others

To view the CMDR blacklist you may use the following example on our Staging Server:

`GET https://api.canonn.tech:2053/excludecmdrs`

```json
[
  {
    "id": 10,
    "cmdrName": "CMDR BadUser",
    "reason": "Sending false Thargoid kill report data to inflate their numbers",
    "created_at": "2019-02-15T08:39:40.000Z",
    "updated_at": "2019-02-15T08:39:40.000Z"
  }
]
```

### Codex Entries

New in Elite Dangerous v3.3 and above the addition of the codex provides a wealth of information, there are some codex entries that Canonn does not track and will not in the forseeable future, due to this we maintain a list of codex entries that we do not wish to receive. You should use this endpoint to ensure you are not sending these entries to us.

Please note that we do trim the journal entry a bit such as removing the leading `$`, tailing `_name;`, and converting the entry type to all lowercase.

::: warning
Please note that this endpoint can be updated at any time, thus it is recommended that your application check this endpoints either at startup or at a scheduled time frame to ensure you have the most up to date list
:::

To view the Codex Entry blacklist you may use the following example on our Staging Server:

`GET https://api.canonn.tech:2053/excludecodices`

```json
[
  {
    "id": 1,
    "codexName": "codex_ent_a_type",
    "reason": "Star Type",
    "created_at": "2019-01-23T01:02:17.000Z",
    "updated_at": "2019-01-23T01:02:17.000Z"
  },
  {
    "id": 2,
    "codexName": "codex_ent_aebe_type",
    "reason": "Star Type",
    "created_at": "2019-01-23T01:02:17.000Z",
    "updated_at": "2019-01-23T01:02:17.000Z"
  },
  {
    "id": 3,
    "codexName": "codex_ent_b_type",
    "reason": "Star Type",
    "created_at": "2019-01-23T01:02:17.000Z",
    "updated_at": "2019-01-23T01:02:17.000Z"
  }
]
```

### Journal Events


### FSS Scan Events


### Unknown Signal Source Events

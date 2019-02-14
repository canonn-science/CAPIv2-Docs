---
sidebarDepth: 3
---

# Reporting to Canonn

Below we will break down the process of sendings to Canonn on a site by site basis, along with sendings for data we may not have.

## Breakdown of Report Fields

Of course to start you need to know what data to send, how to format it, and where to send it to; thus first we need to breakdown the report structure. In this example we will be working with Brain Trees which you can see more information on BTs [here](./reporttypes.html#bt-brain-trees).

### Report Structure

> Type: `application/json` only

```json
{
  "userType": "pc",
  "reportType": "new",
  "systemName": "HD 63154",
  "systemAddress": 22810707116,
  "coordX": 979.46875,
  "coordY": -207.40625,
  "coordZ": -131.59375,
  "bodyName": "HD 63154 B 3 A",
  "latitude": -20.7562,
  "longitude": -177.1881,
  "type": "codex_ent_seed",
  "cmdrName": "Criddles",
  "cmdrComment": "Some Random comment here",
  "isBeta": false,
  "clientVersion": "yourclient-0.0.1",
  "reportStatus": "pending",
  ## "reportComment": "Do not update me, Canonn use only",
  ## "voteCount": 0,
  ## "added": false,
  ## "site": 791
}
```

::: warning
The `#` in the above json structure is for special fields, see below for more details
:::

Looking above we can see a PC based report with all of the fields populated that are needed (some of them are not required but we will get into that)

First lets start with a breakdown of a few of common fields are on almost all report models, for specifics on each report you should take a look at the site type you wish to send report data on. Some models do require some different data.

---

### Common Fields

#### User Type

* Possible Values:
  * `pc`
  * `console`
* Required: Yes

User type obviously is defining if the user is based on PC (with access to journal files) or if they are a PS4 or Xbox user. Typically console users will remain in our queue for much longer as we have a few requirements such as the System **and** body need to be in EDSM to be approved.

---

#### Report Type

* Possible Values:
  * `new` : Used to define a new find
  * 
  * `update` : Update an existing site (note you need to also include the id of the site)
  * `error` : Report a site that may no longer exists or cannot be found (note you also need to include the id of the site)
* Required: Yes
* Default: `new`

Typically mosts will be `new` as both `update` and `error` require a few extra fields such as `"site": 791` (not to be confused with `siteID`). News are processed automatically by our updater and checked for valid data before being added.

---

#### Is Beta

* Possible Values:
  * `true`
  * `false`
* Required: No
* Default: `false`

With Elite Dangerous beta builds, we do not validate any reports submitted, however we do still take them. If your client supports running on ED Beta releases you **have** to send this value. If you are running on a release version, you do not need to send this as by default it is `false`.

---

#### Report Status

* Possible Values:
  * `pending`
  * `updated`
  * `verified`
  * `accepted`
  * `declined`
  * `issue`
* Required: Yes
* Default: `pending`
* Note: You should **always** send pending

Report status is used by us in Canonn to track the progress of a report, all news no matter their type should be sent as `pending` only. Our updater and a few other tools of ours will update this value depending on checks in place or due to manual intervention.

::: danger
If you attempt to send an improper value or try to update this value yourself, your client and/or CMDR can and will be blacklisted!
:::

---

#### Added

* Possible Values:
  * `true`
  * `false`
* Required: No
* Note: You should **never** send this, this boolean value is flipped by our updater

Again this is another boolean based value, and it also happens to be one you should **never** send. This value is flipped based on if our updater has approved the report and it is added.

---

#### Site

* Type: Relational ID to a site
* Required: No
* Note: You should only send this if you are referenceing and existing site

This field is a dual purpose, for news you should not send this, as our updater maps the report to the site after it is added. If you are sending `update` or `error`s you should send the ID of the site you are referring to.

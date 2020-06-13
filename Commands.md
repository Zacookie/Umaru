### Default Prefix: `*`
#### Help Command: `*help`

| Configuration Commands | Description | Usage |
| --- | --- | --- |
| Set Mod-log | Set the server's modlog channel | ```sml [ Channel: name, ID, mention ]``` |
| Set Prefix | Set U's server prefix | ```setp [ prefix ]``` |
* **Note: Modlog channel is where the bot will send the message when someone got:**
    * `Kicked`
    * `Banned`
    * `Unbanned`
    * `Muted`
    * `Temporarily Muted`
    * `Unmuted`

| Moderation Commands | Description | Usage |
| --- | --- | --- |
| **Kick** | Kick a user from the server | ```kick [ User: mention, name, nickname, ID ] <reason>``` |
| **Ban** | Ban a user from the server | ```ban [ User: mention, name, nickname, ID] <reason>``` |
| **Unban** | Unban a banned user | ```uban [ User: name, username#TAG, ID] <reason>```
| **Mute** | Mute a user | ```mute [ User: mention, name, nickname, ID] <reason>```
| **Temporary Mute** | Temporarily mute a user | ```tmute [ User: mention, name, nickname, ID] <reason>``` |
| **Unmute** | Unmute a muted user | ```umute [ User: mention, name, nickname, ID] <reason>```
| **Add Role** | Add role to a user | ```addr [ User: mention, name, nickname, ID]```
| **Delete Role** | Delete role from a user | ```delr [ User: mention, name, nickname, ID]```
| **Delete Messages** | Delete messages from 1-100 | ```purge [1-100]```
* **Note: To perform one of the moderation commands, you must have the required permission to execute it**

| Permission | Command |
| --- | --- |
| ```Kick Members``` | Kick |
| ```Ban Members``` | Ban and Unban |
| ```Manage Roles``` | Add Role, Delete Role, Mute, Temporary Mute, and Unmute |
| ```Manage Messages``` | Purge |


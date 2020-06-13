### Default Prefix: `*`
#### Help Command: `*help`
---
| Configuration Commands | Description | Usage |
| --- | --- | --- |
| **Set Mod-log** | Set the server's modlog channel | ```sml [ Channel: name, ID, mention ]``` |
| **Set Prefix** | Set U's server prefix | ```setp [ prefix ]``` |
* **Note: Modlog channel is where the bot will send the message when someone got:**
    * `Kicked`
    * `Banned`
    * `Unbanned`
    * `Muted`
    * `Temporarily Muted`
    * `Unmuted`
---
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
### Permission Chart
| Permission | Command |
| --- | --- |
| ```Kick Members``` | Kick |
| ```Ban Members``` | Ban and Unban |
| ```Manage Roles``` | Add Role, Delete Role, Mute, Temporary Mute, and Unmute |
| ```Manage Messages``` | Purge |
---
| Information Commands | Description | Usage |
| --- | --- | --- |
| **Server Info** | Provides the information about the server | ```serveri``` |
| **User Info** | Provides the information about the user or the author | ```useri [ User: mention, name, nickname, ID]``` |
| **Country** | Provides the information about a specific country | ```country [ country name ]``` |
| **Invite** | Sends the invite link of **U'** | ```invite``` |
| **Ban List** | Sends **all** banned members' name | ```bl``` |
| **Avatar** | Sends the author or the user's avatar | ```avtr [ User: name, username#TAG, ID]``` |
| **Wikipedia** | Search something from [Wikipedia](https://wikipedia.com/) | ```wiki [ query ]``` |
| **Stats** | Sends the bot's stats | ```stats``` |
| **Member Count** | Sends the number of members in the server; including bots | ```memc``` |
| **Role List** | Sends all of the roles in the server | ```rl``` |
---
| Miscellaneous Commands | Description | Usage |
| --- | --- | --- |
| **Meme** | Generates memes from [Reddit](https://reddit.com/) | ```meme``` |
| **Reddit** | Search something from [Reddit](https://reddit.com/) | ```reddit [ query ]``` |
| **Space** | Sends information from space | ```space``` |
| **QR Code** | Make a QR code that contains a message | ```code [ text ]``` |
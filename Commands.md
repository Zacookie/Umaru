### Default Prefix: `*`
#### Help Command: `*help`

| Configuration Commands | Description | Usage |
| --- | --- | --- |
| Set Mod-log | Set the server's modlog channel | ```sml [channel \| name, ID, mention ]``` |
| Set Prefix | Set U's server prefix | ```setp [ prefix ]``` |
* **Note: Modlog channel is the channel where the bot will send the message when someone got:**
    * `Kicked`
    * `Banned`
    * `Unbanned`
    * `Muted`
    * `Temporarily Muted`
    * `Unmuted`

| Moderation Commands | Description | Usage |
| --- | --- | --- |
| Kick | Kick a user from the server | ```kick [ mention, name, nickname, ID ] \<reason>``` |
| Ban | Ban a user from the server | ```ban [ mention, name, nickname, ID] \<reason```> |
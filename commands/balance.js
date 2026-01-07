import { SlashCommandBuilder } from "discord.js";
import { QuickDB } from "quick.db";

const db = new QuickDB();

export const data = new SlashCommandBuilder()
  .setName("balance")
  .setDescription("Check your balance");

export async function execute(interaction) {
  const bal = await db.get(`bal_${interaction.user.id}`) || 0;
  interaction.reply(`💰 Balance: **${bal.toLocaleString()}**`);
}

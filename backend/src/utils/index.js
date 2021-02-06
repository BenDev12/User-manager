class Update {
  static async status_update(status) {
    if (status === "complete") return "complete";
    if (status === "ongoing") return "ongoing";
    if (status === "Declined") return "Declined";
    if (status === "Paused") return "Paused";
  }
}
export default Update;

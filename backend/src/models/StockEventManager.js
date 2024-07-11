/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class StockEventManager extends AbstractManager {
  constructor() {
    super({ table: "stock_event" });
  }

  async getAllStockEvent() {
    return this.database.query(
      `select se.id ,event_id ,city ,date ,address ,user_id ,lastname ,firstname ,email ,se.created_at from ${this.table} as se JOIN event ON se.event_id = event.id JOIN user ON se.user_id = user.id ;`
    );
  }

  async createStockEvent(event_id, user_id) {
    return this.database.query(
      `INSERT INTO ${this.table} (event_id, user_id) VALUES (?,?)`,
      [event_id, user_id]
    );
  }

  async decrementEventQuantity(event_id) {
    return this.database.query(
      `UPDATE event SET quantity = quantity - 1 WHERE id = ?`,
      [event_id]
    );
  }

  async checkUserEventById(user_id) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE user_id = ?`,
      [user_id]
    );
  }

  async checkUserEventByUserId(user_id) {
    return this.database.query(
      `SELECT se.id, se.event_id, e.city, e.date, e.address, e.quantity, e.status, se.user_id, u.lastname, u.firstname, u.email, se.created_at
FROM ${this.table} AS se
JOIN event AS e ON se.event_id = e.id
JOIN user AS u ON se.user_id = u.id
WHERE se.user_id = ?
`,
      [user_id]
    );
  }

  async checkUserEvent(event_id, user_id) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE event_id = ? AND user_id = ?`,
      [event_id, user_id]
    );
  }
}

module.exports = StockEventManager;

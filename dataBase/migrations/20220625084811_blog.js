/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('blog',table=>{
        table.increments('id');
        table.integer('user_Id').unsigned().notNullable();
        table.foreign('user_Id').references('id').inTable('user');
        table.string('title');
        table.string('discription');
        table.string('publised_date');
        table.string('modify_date');
        table.string('status');
        table.integer('category_id').unsigned().notNullable();
        table.foreign('category_id').references('id').inTable('category');
        table.timestamps(true,true);    
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('blog')
};

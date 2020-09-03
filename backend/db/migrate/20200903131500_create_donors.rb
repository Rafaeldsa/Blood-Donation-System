class CreateDonors < ActiveRecord::Migration[6.0]
  def change
    create_table :donors do |t|
      t.string :nome
      t.string :tipo
      t.integer :idade
      t.string :email, null: false
      t.string :senha

      t.timestamps
    end

    add_index :donors, :email, unique: true
  end
end

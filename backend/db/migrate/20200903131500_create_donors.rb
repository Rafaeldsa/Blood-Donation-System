class CreateDonors < ActiveRecord::Migration[6.0]
  def change
    create_table :donors do |t|
      t.string :nome
      t.string :tipo
      t.integer :idade
      t.string :email
      t.string :senha

      t.timestamps
    end
  end
end

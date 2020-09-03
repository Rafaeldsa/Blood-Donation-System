class CreateDonations < ActiveRecord::Migration[6.0]
  def change
    create_table :donations do |t|
      t.string :doador
      t.string :tipo
      t.string :cidade
      t.string :estado
      t.string :data

      t.timestamps
    end
  end
end

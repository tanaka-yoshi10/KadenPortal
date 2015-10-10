class CreateDevices < ActiveRecord::Migration
  def change
    create_table :devices do |t|
      t.string :name
      t.integer :x
      t.integer :y
      t.integer :z

      t.timestamps null: false
    end
  end
end

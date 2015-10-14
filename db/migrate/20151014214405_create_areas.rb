class CreateAreas < ActiveRecord::Migration
  def change
    create_table :areas do |t|
      t.string :name
      t.string :area_image

      t.timestamps null: false
    end
  end
end

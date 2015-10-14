class AddAreaToDevice < ActiveRecord::Migration
  def change
    add_reference :devices, :area, index: true, foreign_key: true
  end
end

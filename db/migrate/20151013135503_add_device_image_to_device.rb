class AddDeviceImageToDevice < ActiveRecord::Migration
  def change
    add_column :devices, :device_image, :string
  end
end

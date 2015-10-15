class Device < ActiveRecord::Base
  has_many :properties
  belongs_to :area
  mount_uploader :device_image, DeviceImageUploader

  def info
    self.properties.map { |property|
      property.name + ":" + property.value
    }.join('|')
  end
end

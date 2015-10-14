class Area < ActiveRecord::Base
  has_many :devices
  mount_uploader :area_image, AreaImageUploader
end

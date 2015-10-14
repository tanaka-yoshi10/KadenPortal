# encoding: utf-8

class DeviceImageUploader < CarrierWave::Uploader::Base
  include CarrierWave::MiniMagick

  storage :file

  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  process :resize_to_limit => [120, 120]

  def extension_white_list
    %w(jpg jpeg gif png)
  end
end

json.array!(@areas) do |area|
  json.extract! area, :id, :name, :area_image
  json.url area_url(area, format: :json)
end

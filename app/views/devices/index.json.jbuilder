json.array!(@devices) do |device|
  json.extract! device, :id, :name, :x, :y, :z
  json.url device_url(device, format: :json)
end

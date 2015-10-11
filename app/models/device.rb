class Device < ActiveRecord::Base
  has_many :properties

  def info
    self.properties.map { |property|
      property.name + ":" + property.value
    }.join('|')
  end
end

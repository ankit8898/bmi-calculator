class Bmi < ActiveRecord::Base
	validates :weight,:height,presence: true
end

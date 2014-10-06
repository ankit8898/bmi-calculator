module Api
	module V1
		class BmisController < ApplicationController
			def index
				@bmis = Bmi.all
				render json: @bmis
			end

			def create
				@bmi = Bmi.new(bmi_params)
				if @bmi.save
					render json: @bmi
				else
					render json: {message: 'Failure'}
				end
			end

			def bmi_params
				params.require(:bmis).permit(:weight,:height)
			end
		end
	end
end
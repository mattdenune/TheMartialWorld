class ArtsController < ApplicationController
    def index
        @arts = Art.all  
        render json: { message: "ok", arts: @arts }
    end

    def show
        begin
            @art = Art.find(params[:id])
            render json: { message: "ok", art: @art }
        rescue ActiveRecord::RecordNotFound
            render json: { message: 'no martial art matches that ID' }, status: 404
        rescue StandardError => e
            render json: { message: e.to_s }, status: 500
            
        end
    end
end

class ArtsController < ApplicationController
    before_action :set_art, only: [:show, :update, :destroy]

    def index
        @arts = Art.all  
        render json: { message: "ok", arts: @arts }
    end

    def show
        begin
            @art = Art.find(params[:id])
            render json: { 
                message: "ok", 
                art: @art 
            }
        rescue ActiveRecord::RecordNotFound
            render json: { 
                message: 'no martial art matches that ID' 
                }, status: 404
        rescue StandardError => e
            render json: { 
                message: e.to_s 
                }, status: 500
            
        end
    end

    def create
        puts 'creating martial art'
        puts params
            art = Art.new(art_params)
        puts "??", art
            if art.save
                render json: {
                    message: "ok",
                    art: art
                }
            else
                render json: {
                    message: art.errors
                }, status: 500
            end
    end

    def update
        if @art.update(art_params)
            render json: {
                message: "ok",
                art: @art
            }
        else
            render json: {
                message: @art.errors
            }, status: 500
        end
    end

    def destroy
        @art.destroy
        render json: {
            message: "ok"
        }
    end

    private

    def set_art
        @art = Art.find(params[:id])
    end

    def art_params
        params.permit(:name, :origin, :founder, :founder_img, :style, :description, :images)
    end

end

class ArtsController < ApplicationController
    def index
        @arts = Arts.all  
        render json: {message: "ok", arts: @arts }
    end
end

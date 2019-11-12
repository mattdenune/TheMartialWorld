class AddImagesToArts < ActiveRecord::Migration[6.0]
  def change
    add_column :arts, :images, :text, array: true, default: []
  end
end

class CreateArts < ActiveRecord::Migration[6.0]
  def change
    create_table :arts do |t|
      t.string :name
      t.string :origin
      t.string :founder
      t.string :founder_img
      t.string :style
      t.text :description

      t.timestamps
    end
  end
end
